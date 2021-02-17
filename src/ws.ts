export class WS {
  connection: WebSocket;
  protected connected;
  protected messageCallback;
  protected clientKey;
  private url: string;
  constructor({ url }) {
    this.messageCallback = null;
    this.connection = null;
    this.connected = false;
    this.url = url;
  }
  connect(clientKey){
    this.clientKey = clientKey;
    const url = `${this.url}/?clientKey=${clientKey}`;
    this.connection = new WebSocket(url);
    this.initiateListener();
  }
  onMessage({ data }){
    try {
      data = JSON.parse(data);
    } catch {
      //
    }

    if (data && this.messageCallback) {
      this.messageCallback({ data });
    }
  }
  onConnectionOpen(){
    this.connected = true;
  }
  waitForOpen(): Promise<any> {
    return new Promise(resolve => {
      if (this.connected) {
        resolve(true);
      } else {
        this.connection.addEventListener("open", resolve);
      }
    });
  }
  async subscribe(channel, event, clientKey, callback){
    await this.waitForOpen();
    this.send({
      action: "subscribe",
      data: {
        channel,
        event,
        clientKey,
      },
    });
    this.messageCallback = callback;
  }
  send(message){
    this.connection.send(JSON.stringify(message));
  }
  unsubscribe(channel, event, clientKey){
    this.send({
      action: "unsubscribe",
      data: {
        channel,
        event,
        clientKey,
      },
    });
  }
  close(){
    this.connection.close();
  }
  initiateListener(){
    this.connection.onopen = this.onConnectionOpen.bind(this);
    this.connection.onmessage = this.onMessage.bind(this);
  }
}