import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "javaClassGenerator",
  pure: true,
})
export class JavaClassGeneratorPipe implements PipeTransform {
  transform(className: string, parameters: string[]): string {
    return `new ${className}(${parameters.join(", ")})`;
  }
}
