import {atom, selector} from 'recoil'

export const networkAtom = atom({
    key: 'networkAtom',
    default: 102
})

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
})

export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 12
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 0
})

export const totalNotification = selector({
    key: 'totalNotificationCount',
    get: ({get})=>{
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const notification = get(notificationAtom);
        const messaging = get(messagingAtom);
        return network + jobs + notification + messaging;
    }
});