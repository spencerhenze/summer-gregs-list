function JobService() {

    var jobs = JSON.parse(localStorage.getItem('jobs')) || []

    function saveJobs(){
        localStorage.setItem('jobs', JSON.stringify(jobs))
    }

    this.getJobs = function(cb) {
        cb(JSON.parse(JSON.stringify(jobs)))
    }

    this.addHome = function(job){
        homes.push(job)
        saveJobs()
    }


}