// MethodDecorator must return the descriptor or void (but you're modifying it, so return it)
import { PythonShell } from 'python-shell';
import * as path from 'path';

// export function expose(pythonFile: string): any {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: TypedPropertyDescriptor<any>
//   ): TypedPropertyDescriptor<any> | void {
//     const originalMethod = descriptor.value;
    
//     descriptor.value = async function (...args: any[]) {
//       const pythonPath = path.join(process.cwd(), 'myNestPyProject/app', pythonFile);
//       try {
//         const results = await PythonShell.run(pythonPath, {
//           args: [propertyKey.toString(), ...args],
//         });
//         return results[0]; // Assuming single return value
//       } catch (err) {
//         console.error('Error calling Python service:', err);

//         throw err;
//       }
//     };

//     return descriptor;
//   };
// }

export function expose(pythonFile: string): any {
  return (target, propertyKey, descriptor: PropertyDescriptor) => {
    console.log('descriptor', descriptor)
    // const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const pythonPath = path.join(process.cwd(), 'myNestPyProject/app', pythonFile);
      try {
        const results = await PythonShell.run(pythonPath, {
          args: [propertyKey.toString(), ...args],
        });
        return results[0];
      } catch (err) {
        console.error('Error calling Python service:', err);
        throw err;
      }
    };

    return descriptor;
  };
}

export class PythonService {
  constructor(private serviceName: string) {}

  async callMethod(methodName: string, args: any[]): Promise<string[]> {
    try {
      const results = await PythonShell.run(this.serviceName, {
        args: [methodName, ...args],
      });
      return results || [];
    } catch (err) {
      throw err;
    }
  }
}
