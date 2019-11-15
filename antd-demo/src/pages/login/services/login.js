
import requset from '@/utils/requset'

export function signup(payload){
    return requset('/api/signup',{
        method:"POST",
        body:JSON.stringify(payload)
    })
}