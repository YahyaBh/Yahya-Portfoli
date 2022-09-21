export default {
    name: 'skills_header',
    title: 'Skills_Header',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}

