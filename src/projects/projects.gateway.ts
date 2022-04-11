import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({namespace: "/projects"})
export class ProjectsGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log("HELLO");
    return 'Hello world!';
  }
}
