import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({namespace: "/projects/:projectId/rooms/:roomId"})
export class RoomsGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
