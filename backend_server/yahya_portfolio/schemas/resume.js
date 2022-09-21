export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'resume_pdf',
      type: 'file',
      options: {
        allowedMimeTypes: [
          'application/pdf'
        ]
      }
    }

  ]
}

