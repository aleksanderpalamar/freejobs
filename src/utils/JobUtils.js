module.exports = {
  remainingDays(job) {
    // ajustes no job, calculo de tempo restante.
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDate() + Number(remainingDays)
    const dueDate = createdDate.setDate(dueDay)

    const timeDiffInMs = dueDate - Date.now()
    // transformar milisegundos em dias
    const dayInMs = 1000 * 60 * 60 * 24
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs)
    /* Math.floor faz o arredondamento para baixo quanto,
    o Math.ceil faz o arredondamento para cima. */                                                    

    // restam x dias
    return dayDiff
  },
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}