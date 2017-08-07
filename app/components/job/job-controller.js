function JobController() {
    var jobService = new JobService()

    function drawJobs(jobs) {
        var template = ''
        jobs.forEach((job) => {
            template += `
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top listing-image" src="${job.img}" alt="placeholder image">
                        <div class="card-block">
                            <h4>Skills: ${job.title}</h4>
                            <h4>Description: ${job.description}</h4>
                            <h4>Pay: $${job.pay}</h4>
                        </div>
                    </div>
                </div>
            `
        })
        document.getElementById('jobs-results').innerHTML = template;
    }

    this.addJob = function(event){
        event.preventDefault()
        var form = event.target

        var job = {
            title: form.title.value,
            description: form.description.value,
            pay: form.pay.value,
            img: form.img.value
        }

        jobService.addJob(job)
        jobService.getJobs(drawJobs)
        form.reset()
    }

    jobService.getJobs(drawJobs)

}