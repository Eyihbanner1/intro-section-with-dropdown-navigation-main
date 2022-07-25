const features = document.getElementById('features')
const company = document.getElementById('company')
const featuresList = document.getElementById('features-list')
const companyList = document.getElementById('company-list')
const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')
const mobileFeatures = document.getElementById('mobile-features')
const mobileFeaturesList = document.getElementById('mobile-features-list')
const mobileCompanyList = document.getElementById('mobile-company-list')
const mobileCompany = document.getElementById('mobile-company')
const menuClose = document.getElementById('menu-close')
const arrowDownFeatures = document.getElementById('arrow-down-features')
const arrowDownCompany = document.getElementById('arrow-down-company')
const featuresArrowDown = document.getElementById('features-arrow-down')
const companyArrowDown = document.getElementById('company-arrow-down')


features.addEventListener('click', () => {
    featuresList.classList.toggle('show')
    arrowDownFeatures.classList.toggle('arrow-up')
})

company.addEventListener('click', () => {
    companyList.classList.toggle('show')
    arrowDownCompany.classList.toggle('arrow-up')
})

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('show-flex')
})

menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('show-flex')
    mobileFeaturesList.classList.remove('show')
    mobileCompanyList.classList.remove('show')
})

mobileFeatures.addEventListener('click', () => {
    mobileFeaturesList.classList.toggle('show')
    featuresArrowDown.classList.toggle('arrow-up')
})

mobileCompany.addEventListener('click', () => {
    mobileCompanyList.classList.toggle('show')
    companyArrowDown.classList.toggle('arrow-up')
})






