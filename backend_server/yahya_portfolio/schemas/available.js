export default{
    name:'available',
    title:'Available',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'available',
            title:'Available',
            type:'boolean'
        },
        
    ]
}