// Simple in-memory notification log (demo)
const logs = []

export function addLog(entry) {
    const record = { id: `LOG-${logs.length + 1}`, timestamp: new Date().toISOString(), ...entry }
    logs.unshift(record)
    return record
}

export function getLogs() {
    return Promise.resolve(logs.slice())
}

export default { addLog, getLogs }
