let containers = ['box', 'bowl', 'cup', 'bag', 'jar']
containers = containers.sort()

//console.log(containers.__proto__)
//containers.forEach((container) => console.log(container))

function log_containers(container) {
    console.log(container)
}

containers.forEach(log_containers)

console.log(containers)
