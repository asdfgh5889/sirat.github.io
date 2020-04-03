var user

$.get( "https://sirat-73869.firebaseio.com/database.json", function( data ) {
    user = data
    console.log(data)
    var id = Object.keys(data.students)[0]
    var s = data.students[id]
    $("#user-id").text(id)
    $("#user-name").text(s["student_name"])
    $("#user-gender").text(s["gender"])
    $("#user-age").text(s["age"])
    var se = s["sessions"]
    Object.keys(s["sessions"]).forEach(e => {
        var d = new Date(parseInt(e))
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
        const h = new Intl.DateTimeFormat('ru', { hour: 'numeric' }).format(d)
        const m = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(d)
        
        var history = se[parseInt(e)]["selection_history"]
        if (history != undefined)
            history.forEach(hi => {
                $("#user-data").append(`<tr><td>${h}:${m} ${mo}/${da}/${ye}</td><td>${se[e]["duration"]}</td><td>${hi["word"]}</td><td>${hi["definition"]}</td></tr>`)
            })
    });
});