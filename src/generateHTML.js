const infoHeader = function(){
    return 'header of the team with links'
};

const infoManager = function (data) {
    return 'manager card with ${data.name}, ${data.id}, mailable ${data.email}, and ${data.officeNumber}'
};

const infoEngineer = function (data) {
    return 'engineer card with ${data.name}, ${data.id}, mailable ${data.email}, and ${data.GitHub}'
};

const infoIntern = function (data) {
    return 'intern card with ${data.name}, ${data.id}, mailable ${data.email}, and ${data.school}'
};

const infofooter = function () {
    return 'footer of your team with jQuery and sortable function'
};