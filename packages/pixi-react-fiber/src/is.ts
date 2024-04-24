export interface Is<A> {
  (a: any): a is A
}

export const isArray: Is<any[]> = (a): a is any[] => Array.isArray(a)

export const isFunction: Is<Function> = (a: any): a is Function => typeof a === 'function'

export const isObject: Is<object> = (a): a is object => a === Object(a) && !isArray(a) && !isFunction(a)

export const isString: Is<string> = (a): a is string => typeof a === 'string'

export const isNumber: Is<number> = (a): a is number => typeof a === 'number'

export const isBoolean: Is<boolean> = (a): a is boolean => typeof a === 'boolean'

export const isUndefined: Is<undefined> = (a): a is undefined => a === void 0
