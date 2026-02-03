import { templates, getTemplate } from './notificationTemplates'
import { sendSMS, sendNotification } from './smsSender'
import { addLog, getLogs } from './notificationLog'
import NotificationsPanel from './NotificationsPanel'

export { templates, getTemplate, sendSMS, sendNotification, addLog, getLogs, NotificationsPanel }
export default { templates, getTemplate, sendSMS, sendNotification, addLog, getLogs, NotificationsPanel }
