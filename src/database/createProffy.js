module.exports = async function(db,{proffyValue, classValue, classScheduleValues}){
    //Inserir dados na table de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    //Inserir dados na tabela classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) values(
               "${classValue.subject}",
               "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

    //insrir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheculeValue)=> {
        return db.run(`
            INSERT INTO class_schedule(
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
               " ${class_id}",
                "${classScheculeValue.weekday}",
                "${classScheculeValue.time_from}",
                "${classScheculeValue.time_to}"
            );
        `)
    })


    //aqui vou executar todo os db.runs()das class_scchedules
    await Promise.all(insertedAllClassScheduleValues)
}