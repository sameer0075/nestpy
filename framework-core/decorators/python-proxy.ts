// decorators/python-proxy.decorator.ts
import axios from "axios";

export function PythonProxy(endpoint: string): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    if (!descriptor || typeof descriptor.value !== "function") {
      throw new Error("PythonProxy decorator can only be applied to methods.");
    }

    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        const response = await axios.get(`http://localhost:5000${endpoint}`);
        return response.data.message;
      } catch (error) {
        console.error("Error calling Python service:", error);
        throw new Error("Python call failed");
      }
    };

    return descriptor;
  };
}
