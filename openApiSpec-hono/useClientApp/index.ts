import { DefaultService } from "./generated";

async function main() {
    
    const res = await DefaultService.getUser("1323");
    console.log(res);

}

main();