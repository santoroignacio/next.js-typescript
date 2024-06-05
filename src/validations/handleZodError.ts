import { ZodError } from "zod";

const handleZodError = ({ issues }: ZodError<unknown>) => {
    const formData: Record<string, string> = {};
    
    // - line of code should be true if the schema is not an object
    // - This line is completely optional
      if (issues.length === 1 && issues[0].path.length < 1)
      return issues[0].message;
    
    issues.forEach(({ path, message }) => {
    formData[path.join('-')] = message;
    });
    
    return formData;
    };
    
    export default handleZodError