import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'skillFilter' })
class SkillFilter implements PipeTransform {
    transform(value: any[], args: any) {

        if (args == 'all') {
            return value;
        }
        else {
            return value.filter(item => item.tag == args);
        }

    }
}

export { SkillFilter }