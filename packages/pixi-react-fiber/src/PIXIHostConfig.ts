import {HostConfig} from 'react-reconciler'
import * as PIXI from 'pixi.js'
import {Container} from 'pixi.js'

export interface PIXIHostConfig extends HostConfig<
  string,
  Record<string, unknown>,
  PIXI.Container,
  PIXI.Container,
  never,
  never,
  never,
  PIXI.Container,
  never,
  any,
  never,
  number | undefined,
  -1
> {
}

export class PIXIHostConfigImpl implements PIXIHostConfig {

  public readonly isPrimaryRenderer: boolean = false
  public readonly supportsMutation: boolean = true
  public readonly supportsHydration: boolean = false
  public readonly supportsPersistence: boolean = false
  public readonly noTimeout: -1 = -1

  public constructor() {
  }

  afterActiveInstanceBlur(): void {
  }

  appendInitialChild(parentInstance: Container, child: Container): void {
  }

  beforeActiveInstanceBlur(): void {
  }

  cancelTimeout(id: number | undefined): void {
  }

  createInstance(type: string, props: Record<string, unknown>, rootContainer: Container, hostContext: never, internalHandle: ReactReconciler.OpaqueHandle): Container {
    return undefined
  }

  createTextInstance(text: string, rootContainer: Container, hostContext: never, internalHandle: ReactReconciler.OpaqueHandle): never {
    return undefined
  }

  detachDeletedInstance(node: Container): void {
  }

  finalizeInitialChildren(instance: Container, type: string, props: Record<string, unknown>, rootContainer: Container, hostContext: never): boolean {
    return false
  }

  getChildHostContext(parentHostContext: never, type: string, rootContainer: Container): never {
    return undefined
  }

  getCurrentEventPriority(): ReactReconciler.Lane {
    return undefined
  }

  getInstanceFromNode(node: any): ReactReconciler.Fiber | null | undefined {
    return undefined
  }

  getInstanceFromScope(scopeInstance: any): null | Container {
    return undefined
  }

  getPublicInstance(instance: Container): Container {
    return undefined
  }

  getRootHostContext(rootContainer: Container): null {
    return undefined
  }

  prepareForCommit(containerInfo: Container): Record<string, any> | null {
    return undefined
  }

  preparePortalMount(containerInfo: Container): void {
  }

  prepareScopeUpdate(scopeInstance: any, instance: any): void {
  }

  prepareUpdate(instance: Container, type: string, oldProps: Record<string, unknown>, newProps: Record<string, unknown>, rootContainer: Container, hostContext: never): any {
    return undefined
  }

  resetAfterCommit(containerInfo: Container): void {
  }

  scheduleTimeout(fn: (...args: unknown[]) => unknown, delay?: number): number | undefined {
    return undefined
  }

  shouldSetTextContent(type: string, props: Record<string, unknown>): boolean {
    return false
  }



}
