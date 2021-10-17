export interface Container {
  Id: string;
  Names?: string[] | null;
  Image: string;
  ImageID: string;
  Command: string;
  Created: number;
  Ports?: PortsEntity[] | null;
  Labels: Labels;
  State: string;
  Status: string;
  HostConfig: HostConfig;
  NetworkSettings: NetworkSettings;
  Mounts?: MountsEntity[] | null;
}
export interface PortsEntity {
  PrivatePort: number;
  Type: string;
  IP?: string | null;
  PublicPort?: number | null;
}
export interface Labels {
  'com.docker.compose.config-hash'?: string | null;
  'com.docker.compose.container-number'?: string | null;
  'com.docker.compose.oneoff'?: string | null;
  'com.docker.compose.project'?: string | null;
  'com.docker.compose.project.config_files'?: string | null;
  'com.docker.compose.project.working_dir'?: string | null;
  'com.docker.compose.service'?: string | null;
  'com.docker.compose.version'?: string | null;
  'maintainer'?: string | null;
}
export interface HostConfig {
  NetworkMode: string;
}
export interface NetworkSettings {
  Networks: Networks;
}
export interface Networks {
  [key: string]: Network | null

}
export interface Network {
  IPAMConfig?: null;
  Links?: null;
  Aliases?: null;
  NetworkID: string;
  EndpointID: string;
  Gateway: string;
  IPAddress: string;
  IPPrefixLen: number;
  IPv6Gateway: string;
  GlobalIPv6Address: string;
  GlobalIPv6PrefixLen: number;
  MacAddress: string;
  DriverOpts?: null;
}

export interface MountsEntity {
  Type: string;
  Source: string;
  Destination: string;
  Mode: string;
  RW: boolean;
  Propagation: string;
  Name?: string | null;
  Driver?: string | null;
}
