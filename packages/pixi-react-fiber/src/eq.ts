interface Eq<A> {
  (a: A, b: A): boolean
}

const eqStrict: Eq<unknown> = (a, b) => a === b

const eqBoolean: Eq<boolean> = eqStrict

const eqString: Eq<string> = eqStrict

const eqNumber: Eq<number> = eqStrict

const eqObjectStrict: Eq<object> = eqStrict

const eqArrayStrict: Eq<object> = eqStrict
