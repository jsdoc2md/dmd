${
  doclets.filterByKind('module').length
    ? `# Module List \n\n` + doclets
      .filterByKind('module')
      .map(d => `- ${d.signature}`)
    : ''
}
${
  doclets.filterByScope('global').length
    ? `# Global List \n\n` + doclets
      .filterByScope('global')
      .map(d => `- ${d.signature}`)
    : ''
}
# Module Documentation

${
  doclets
    .filterByKind('module')
    .map(d => d.render())
    .join('\n')
}
