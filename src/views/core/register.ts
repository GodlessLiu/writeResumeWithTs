import { ref } from 'vue';
import template1Vue from '../../components/template1.vue'
import template2Vue from '../../components/template2.vue'
type templateListType = {
    template: any
    preview: any
    name: string
}
type argType = {
    name: string,
    temp: any
}
function initTemplateList(...args: argType[]): [templateListType[], Record<string, any>] {
    let previewTemplateList: templateListType[] = []
    let getPdfTemplateList: Record<string, any> = {}
    for (let index = 0; index < args.length; index++) {
        previewTemplateList.push({
            template: args[index].temp,
            name: args[index].name,
            preview: new URL(`../../assets/${args[index].name}.png`, import.meta.url).href,
        })
        getPdfTemplateList[args[index].name] = args[index].temp
    }
    return [previewTemplateList, getPdfTemplateList]
}

// export const previewTemplateList = ref<templateListType[]>([{
//     template: template1Vue,
//     preview: new URL('../assets/temp1.png', import.meta.url).href,
//     name: 'temp1'
// }, {
//     template: template2Vue,
//     preview: new URL('../assets/temp2.png', import.meta.url).href,
//     name: 'temp2'
// }])

// export const getPdfTemplateList: Record<string, any> = {
//     temp1: template1Vue,
//     temp2: template2Vue
// }

const [previewTemplate, getPdfTemplate] = initTemplateList(
    {
        temp: template1Vue,
        name: 'temp1'
    },
    {
        temp: template2Vue,
        name: 'temp2'
    }
)

export const previewTemplateList = ref<templateListType[]>(previewTemplate)

export const getPdfTemplateList = getPdfTemplate