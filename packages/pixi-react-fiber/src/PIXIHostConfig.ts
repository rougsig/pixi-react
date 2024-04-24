import * as ReactReconciler from 'react-reconciler'
import * as PIXI from 'pixi.js'
import {applyDiffSet, createDiffSet, DiffSet} from '#/diff-set'

export interface InstanceProps {
  [key: string]: unknown

  visible: boolean
}

export interface Instance extends InstanceProps, PIXI.Container {
}

export interface Container extends Instance {
}

export interface PIXIHostConfig extends ReactReconciler.HostConfig<
  string,
  InstanceProps,
  Container,
  Instance,
  void,
  never,
  never,
  Instance,
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

  // region Core Methods

  createInstance(
    type: string,
    props: InstanceProps,
    _rootContainer: Container,
    _hostContext: never,
    _internalHandle: ReactReconciler.OpaqueHandle,
  ): Instance {
    return undefined
  }

  getRootHostContext(rootContainer: Container): null {
    return null
  }

  getChildHostContext(parentHostContext: never, type: string, rootContainer: Container): never {
    return parentHostContext
  }

  finalizeInitialChildren(instance: Instance, type: string, props: InstanceProps, rootContainer: Container, hostContext: never): boolean {
    return false
  }

  prepareUpdate(
    _instance: Instance,
    _type: string,
    prev: InstanceProps,
    next: InstanceProps,
    _rootContainer: Container,
    _hostContext: never,
  ): DiffSet | null {
    const diffSet = createDiffSet(prev, next)
    return diffSet.changes.length ? diffSet : null
  }

  commitUpdate(
    instance: Instance,
    diffSet: DiffSet,
    _type: string,
    _prev: InstanceProps,
    _next: InstanceProps,
    _internalHandle: ReactReconciler.OpaqueHandle,
  ) {
    applyDiffSet(instance, diffSet)
  }

  getPublicInstance(instance: Instance): Instance {
    return instance!
  }

  prepareForCommit(_containerInfo: Container): Record<string, any> | null {
    return null
  }

  preparePortalMount(_containerInfo: Container): void {
  }

  resetAfterCommit(_containerInfo: Container): void {
  }

  shouldSetTextContent(_type: string, _props: InstanceProps): boolean {
    return false
  }

  hideInstance(instance: Instance) {
    instance.visible = false
  }

  unhideInstance(instance: Instance, props: InstanceProps) {
    if (props.visible == null || props.visible) {
      instance.visible = true
    }
  }

  createTextInstance(
    _text: string,
    _rootContainer: Container,
    _hostContext: never,
    _internalHandle: ReactReconciler.OpaqueHandle,
  ): void {
    this.handleTextInstance()
  }

  hideTextInstance(_textInstance: void) {
    this.handleTextInstance()
  }

  unhideTextInstance(_textInstance: void, _text: string) {
    this.handleTextInstance()
  }

  beforeActiveInstanceBlur(): void {
    // no-op
  }

  afterActiveInstanceBlur(): void {
    // no-op
  }

  appendInitialChild(parentInstance: Instance, child: Instance): void {
  }

  cancelTimeout(id: number | undefined): void {
  }

  detachDeletedInstance(node: Instance): void {
    // no-op
  }

  getCurrentEventPriority(): ReactReconciler.Lane {
    return undefined
  }

  getInstanceFromNode(node: any): ReactReconciler.Fiber | null | undefined {
    return undefined
  }

  getInstanceFromScope(scopeInstance: any): null | Instance {
    return undefined
  }

  prepareScopeUpdate(scopeInstance: any, instance: any): void {
  }

  scheduleTimeout(fn: (...args: unknown[]) => unknown, delay?: number): number | undefined {
    return undefined
  }

  private handleTextInstance(): void {
    console.warn('Text is only allowed in the text component!')
  }

  // endregion

  // region Mutation Methods

  appendChildToContainer(container: Container, child: Instance) {
    container.addChild(child)
  }

  removeChildFromContainer(container: Container, child: Instance) {
    container.removeChild(child)
  }

  insertInContainerBefore(container: Container, child: Instance, beforeChild: Instance) {
    const index = container.getChildIndex(beforeChild)
    container.addChildAt(child, index)
  }

  // endregion
}
