import { HelperLike } from '@glint/template';

type AnyFunction = (...args: never[]) => unknown;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'array-concat': HelperLike<{
      Args: { Positional: [...arrays: Array<unknown>[]] };
      Return: Array<unknown>;
    }>;
    'array-every': HelperLike<{
      Args: { Positional: [array: Array<unknown>, fn: AnyFunction] };
      Return: boolean;
    }>;
    'array-filter': HelperLike<{
      Args: { Positional: [array: Array<unknown>, fn: AnyFunction] };
      Return: Array<unknown>;
    }>;
    'array-find-index': HelperLike<{
      Args: { Positional: [array: Array<unknown>, fn: AnyFunction] };
      Return: number;
    }>;
    'array-find': HelperLike<{
      Args: { Positional: [array: Array<unknown>, fn: AnyFunction] };
      Return: unknown;
    }>;
    'array-includes': HelperLike<{
      Args: { Positional: [array: Array<unknown>, element: string] };
      Return: boolean;
    }>;
    'array-index-of': HelperLike<{
      Args: { Positional: [array: Array<unknown>, element: string] };
      Return: number;
    }>;
    'array-is-array': HelperLike<{
      Args: { Positional: [array: Array<unknown>] };
      Return: boolean;
    }>;
    'array-is-first-element': HelperLike<{
      Args: { Positional: [array: Array<unknown>, element: unknown] };
      Return: boolean;
    }>;
    'array-is-last-element': HelperLike<{
      Args: { Positional: [array: Array<unknown>, element: unknown] };
      Return: boolean;
    }>;
    'array-join': HelperLike<{
      Args: { Positional: [array: Array<unknown>, delimiter: string] };
      Return: string;
    }>;
    'array-last-index-of': HelperLike<{
      Args: { Positional: [array: Array<unknown>, element: string] };
      Return: number;
    }>;
    'array-map': HelperLike<{
      Args: { Positional: [array: Array<unknown>, fn: AnyFunction] };
      Return: Array<unknown>;
    }>;
    'array-reduce': HelperLike<{
      Args: { Positional: [array: Array<unknown>, fn: AnyFunction, initialValue?: unknown] };
      Return: unknown;
    }>;
    'array-reverse': HelperLike<{
      Args: { Positional: [array: Array<unknown>] };
      Return: Array<unknown>;
    }>;
    'array-slice': HelperLike<{
      Args: { Positional: [array: Array<unknown>, beginIndex?: number, endIndex?: number] };
      Return: Array<unknown>;
    }>;
    'array-some': HelperLike<{
      Args: { Positional: [array: Array<unknown>, fn: AnyFunction] };
      Return: boolean;
    }>;
    'array-sort': HelperLike<{
      Args: { Positional: [array: Array<unknown>, fn: AnyFunction] };
      Return: Array<unknown>;
    }>;
    'array-splice': HelperLike<{
      Args: { Positional: [array: Array<unknown>, beginIndex?: number, deleteCount?: number, ...elements?: unknown[]] };
      Return: Array<unknown>;
    }>;
  }
}
