import { assert } from "https://deno.land/std@0.201.0/assert/mod.ts";

type Foo = {
    bar?: number
}

function morphFoo(foo: Foo): number {
    assert(foo.bar !== undefined, "foo must exist")
    return foo.bar! * 5;
}