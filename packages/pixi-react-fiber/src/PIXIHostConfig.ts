import * as ReactReconciler from 'react-reconciler'
import * as PIXI from 'pixi.js'
import {DiffSet} from '#/diff-set'
import {Container} from 'pixi.js'

export interface PIXIHostConfig extends ReactReconciler.HostConfig<
  string,
  Record<string, unknown>,
  PIXI.Container,
  PIXI.Container,
  never,
  never,
  never,
  PIXI.Container,
  never,
  DiffSet,
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

  appendInitialChild(parentInstance: PIXI.Container, child: PIXI.Container): void {
  }

  beforeActiveInstanceBlur(): void {
  }

  cancelTimeout(id: number | undefined): void {
  }

  createInstance(type: string, props: Record<string, unknown>, rootContainer: PIXI.Container, hostContext: never, internalHandle: ReactReconciler.OpaqueHandle): PIXI.Container {
    return undefined
  }

  createTextInstance(text: string, rootContainer: PIXI.Container, hostContext: never, internalHandle: ReactReconciler.OpaqueHandle): never {
    return undefined
  }

  detachDeletedInstance(node: PIXI.Container): void {
  }

  getCurrentEventPriority(): ReactReconciler.Lane {
    return undefined
  }

  getInstanceFromNode(node: any): ReactReconciler.Fiber | null | undefined {
    return undefined
  }

  getInstanceFromScope(scopeInstance: any): null | PIXI.Container {
    return undefined
  }

  getPublicInstance(instance: PIXI.Container): PIXI.Container {
    return undefined
  }

  prepareForCommit(containerInfo: PIXI.Container): Record<string, any> | null {
    return undefined
  }

  preparePortalMount(containerInfo: PIXI.Container): void {
  }

  prepareScopeUpdate(scopeInstance: any, instance: any): void {
  }

  resetAfterCommit(containerInfo: PIXI.Container): void {
  }

  scheduleTimeout(fn: (...args: unknown[]) => unknown, delay?: number): number | undefined {
    return undefined
  }

  shouldSetTextContent(type: string, props: Record<string, unknown>): boolean {
    return false
  }

  // region Mutation Methods

  appendChildToContainer(container: PIXI.Container, child: PIXI.Container) {
    container.addChild(child)
  }

  removeChildFromContainer(container: PIXI.Container, child: PIXI.Container) {
    container.removeChild(child)
  }

  insertInContainerBefore(container: PIXI.Container, child: PIXI.Container, beforeChild: PIXI.Container) {
    const index = container.getChildIndex(beforeChild)
    container.addChildAt(child, index)
  }

  // endregion
}
