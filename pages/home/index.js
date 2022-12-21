let ulVagas = document.querySelector(`#ulVagas`)
let ulVagasClick = document.querySelector(`#ulVagasClick`)

localStorage.setItem('arrayJobs', JSON.stringify(jobsData))
const jobDataLocal = localStorage.getItem('arrayJobs')
const converterJobsLocalStorage =  JSON.parse(jobDataLocal)
converterJobsLocalStorage.forEach(element => console.log(element))


function setFavJson(fav){
 localStorage.setItem('arrayFav', JSON.stringify(fav))
const favDataLocal = localStorage.getItem('arrayFav')
const converterFavLocalStorage =  JSON.parse(favDataLocal)
converterFavLocalStorage.forEach(element => console.log(element)) 
}

function criarJobs(job){

    let liJob = document.createElement(`li`)
    let divLi = document.createElement(`div`)
    let headerJob = document.createElement(`header`)
    let h3Job = document.createElement(`h3`)
    let divTag = document.createElement(`div`)
    let enterprise = document.createElement(`p`)
    let location = document.createElement(`p`)
    let pJob = document.createElement(`p`)
    let divModalities =  document.createElement(`div`)
    let modalities = document.createElement(`p`)
    let modalities1 = document.createElement(`p`)
    let buttonJob = document.createElement(`button`)
    buttonJob.setAttribute(`type`, `button`)


    liJob.classList.add(`liJob`)
    divLi.classList.add(`divLi`)
    headerJob.classList.add(`headerJob`)
    h3Job.classList.add(`h3Job`)
    divTag.classList.add(`divTag`)
    enterprise.classList.add(`tag`)
    location.classList.add(`tag`)
    divTag.classList.add(`divTag`)
    pJob.classList.add(`pJob`)
    divModalities.classList.add(`divModalities`)
    modalities.classList.add(`modality`)
    modalities1.classList.add(`modality`)
    buttonJob.classList.add(`buttonJob`)

        liJob.id = `liJob`+job.id

        divLi.id=`divLi`+job.id

        headerJob.id=`headerJob`+job.id

        h3Job.id=`h3Job`+job.id
        h3Job.innerText=job.title

        divTag.id = `divTag`+job.id

        enterprise.id=`enterprise`+job.id
        enterprise.innerText=job.enterprise

        location.id=`location`+job.id
        location.innerText=job.location

        pJob.id=`pJob`+job.id
        pJob.innerText=job.descrition

        divModalities.id = `divModalities`+job.id

        modalities.id=`modalities`+job
        modalities.innerText=job.modalities[0]

        modalities1.id=`modalities1`+job
        modalities1.innerText=job.modalities[1]

        buttonJob.id = `buttonJob`+job.id
        buttonJob.innerText=`Candidatar-se`
        buttonJob.dataset.id = job.id

        ulVagas.appendChild(liJob)

        liJob.append(divLi)

        divLi.append(headerJob,h3Job,divTag,pJob,divModalities,buttonJob)

        divTag.append(enterprise, location)

        divModalities.append(modalities,modalities1)

}
const liJob = jobsData.map(function(job){
    return criarJobs(job)
})
function renderJobfav(fav){
    const ulVagasClick =  document.querySelector(`#ulVagasClick`)
    ulVagasClick.innerHTML = ""
    fav.forEach(job =>{
        const jobs1 =  createFavJob(job)
        ulVagasClick.appendChild(jobs1)
    })
    removeFav(fav)
}
function createFavJob(job){
    const container = document.createElement(`li`)
    const title = document.createElement(`h3`)
    const div = document.createElement(`div`)
    const tag1 = document.createElement(`p`)
    const tag2 = document.createElement(`p`)
    const button = document.createElement(`button`)
    const img = document.createElement(`img`)

    container.classList.add(`container_favJob`)

    title.innerText =  job.title
    tag1.innerText = job.enterprise
    tag2.innerText = job.location
    button.id = job.id
    button.classList.add(`fav_btn_remove`)
    button.dataset.favID = job.favID
    button.innerText = `Remover`

    div.append(tag1,tag2)

    container.append(title, div, button)

    return container
}
function favAdd(arr){
   let buttonJob1 =  document.querySelectorAll(`.buttonJob`)
   const favLocal =  JSON.parse(localStorage.getItem(`arrayJobs`))
    buttonJob1.forEach(button=> {
        button.addEventListener("click", (e) =>{

            if( button.classList.includes = `--remover`){
                removeFav(e)
                button.classList.toggle(`class`)
            if ( button.classList.includes = "Candidatar-se"){
                button.innerText = `Remover`
                const jobFound =  jobsData.find(job =>{
                    return job.id === Number(e.target.dataset.id)
                })
                console.log(jobFound)
                const jobToFav = {
                    ...jobFound,
                    favID: fav.length + 1
                    }
                    fav.push(jobToFav)
                    const favStringift = localStorage.setItem(`arrayFav`, JSON.stringify(fav))
                    renderJobfav(fav)
                    setFavJson(fav)
                }
                
    }})
})
}
function removeFav(){
    const fav_btn_remove = document.querySelectorAll('.fav_btn_remove')
  
    fav_btn_remove.forEach(button => {
        button.addEventListener('click', (event) => {
        const jobFav = fav.find(job => {
          return job.id === Number(event.target.id)
        })
        let indexofFav = fav.indexOf(jobFav)
        fav.splice(indexofFav,1)
        renderJobfav(fav)
        setFavJson(fav)
    }
    )})
}
 function getFavoritesArray(){

    const array = JSON.parse(localStorage.getItem(`arrayFav`)) 

    if (array){
        renderJobfav(array)
    }

    return array
}
removeFav()
getFavoritesArray()
favAdd(getFavoritesArray())

