let input = process.argv[2]
let command = input //tree, organize, help
switch(command)
{
    case 'tree':
        console.log('Tree Implemented')
        break;
    case 'organize':
        console.log('Organize Implemented')
        break;
    case 'help':
        console.log('Help Implemented')
        break;
    default:
        console.log('Please enter a valid input')
        break;
}