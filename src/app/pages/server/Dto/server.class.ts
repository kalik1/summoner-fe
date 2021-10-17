import { ServerStatus } from './server.status.class';

export class Server {

  id: string;

  name: string;

  cmd?: string;

  image?: any;

  Instance?: any;

  serverPort: number;

  managePort: number;

  status?: ServerStatus;

}
