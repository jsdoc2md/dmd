${
  doclets.getByKind('module').length
    ? `# Module List \n\n` + doclets
      .getByKind('module')
      .map(d => `- ${d.signature}`)
    : ''
}
${
  doclets.getByScope('global').length
    ? `# Global List \n\n` + doclets
      .getByScope('global')
      .map(d => `- ${d.signature}`)
    : ''
}
# Module Documentation

${
  doclets
    .getByKind('module')
    .map(d => d.render())
    .join('')
}
