export interface DockerInstance {
  ID: string;
  Containers: number;
  ContainersRunning: number;
  ContainersPaused: number;
  ContainersStopped: number;
  Images: number;
  Driver: string;
  DriverStatus?: ((string)[] | null)[] | null;
  Plugins: Plugins;
  MemoryLimit: boolean;
  SwapLimit: boolean;
  KernelMemory: boolean;
  KernelMemoryTCP: boolean;
  CpuCfsPeriod: boolean;
  CpuCfsQuota: boolean;
  CPUShares: boolean;
  CPUSet: boolean;
  PidsLimit: boolean;
  IPv4Forwarding: boolean;
  BridgeNfIptables: boolean;
  BridgeNfIp6tables: boolean;
  Debug: boolean;
  NFd: number;
  OomKillDisable: boolean;
  NGoroutines: number;
  SystemTime: string;
  LoggingDriver: string;
  CgroupDriver: string;
  CgroupVersion: string;
  NEventsListener: number;
  KernelVersion: string;
  OperatingSystem: string;
  OSVersion: string;
  OSType: string;
  Architecture: string;
  IndexServerAddress: string;
  RegistryConfig: RegistryConfig;
  NCPU: number;
  MemTotal: number;
  GenericResources?: null;
  DockerRootDir: string;
  HttpProxy: string;
  HttpsProxy: string;
  NoProxy: string;
  Name: string;
  Labels?: (null)[] | null;
  ExperimentalBuild: boolean;
  ServerVersion: string;
  Runtimes: Runtimes;
  DefaultRuntime: string;
  Swarm: Swarm;
  LiveRestoreEnabled: boolean;
  Isolation: string;
  InitBinary: string;
  ContainerdCommit: ContainerdCommitOrRuncCommitOrInitCommit;
  RuncCommit: ContainerdCommitOrRuncCommitOrInitCommit;
  InitCommit: ContainerdCommitOrRuncCommitOrInitCommit;
  SecurityOptions?: (string)[] | null;
  Warnings?: (string)[] | null;
}
export interface Plugins {
  Volume?: (string)[] | null;
  Network?: (string)[] | null;
  Authorization?: null;
  Log?: (string)[] | null;
}
export interface RegistryConfig {
  AllowNondistributableArtifactsCIDRs?: (null)[] | null;
  AllowNondistributableArtifactsHostnames?: (null)[] | null;
  InsecureRegistryCIDRs?: (string)[] | null;
  IndexConfigs: IndexConfigs;
  Mirrors?: (null)[] | null;
}
export interface IndexConfigs {
  'docker.io': 'Docker';
}

export interface Docker {
  Name: string;
  Mirrors?: (null)[] | null;
  Secure: boolean;
  Official: boolean;
}
export interface Runtimes {
  'io.containerd.runc.v2': PathInterface;
  'io.containerd.runtime.v1.linux': PathInterface;
  runc: PathInterface;
}
export interface PathInterface {
  path: string
}
export interface Swarm {
  NodeID: string;
  NodeAddr: string;
  LocalNodeState: string;
  ControlAvailable: boolean;
  Error: string;
  RemoteManagers?: null;
}
export interface ContainerdCommitOrRuncCommitOrInitCommit {
  ID: string;
  Expected: string;
}
