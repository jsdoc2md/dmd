module.exports = [
  [
    'all-docs',
    '{{#orphans ~}}\n{{>docs~}}\n{{/orphans~}}\n'
  ],
  [
    'access',
    '{{#if access}}**Access**: {{{access}}}  \n{{/if~}}\n'
  ],
  [
    'augments',
    '{{#if augments}}**Extends**: {{>linked-type-list types=augments delimiter=", " }}  \n' +
      '{{/if}}\n'
  ],
  [
    'authors',
    '{{#if author}}{{#each author}}**Author**: {{{inlineLinks this}}}  \n' +
      '{{/each}}{{/if~}}\n'
  ],
  [
    'body',
    '{{>deprecated~}}\n' +
      '{{>description~}}\n' +
      '{{>scope~}}\n' +
      '{{>summary~}}\n' +
      '{{>augments~}}\n' +
      '{{>implements~}}\n' +
      '{{>mixes~}}\n' +
      '{{>default~}}\n' +
      '{{>chainable~}}\n' +
      '{{>overrides~}}\n' +
      '{{>returns~}}\n' +
      '{{>category~}}\n' +
      '{{>throws~}}\n' +
      '{{>fires~}}\n' +
      '{{>this~}}\n' +
      '{{>access~}}\n' +
      '{{>readOnly~}}\n' +
      '{{>requires~}}\n' +
      '{{>customTags~}}\n' +
      '{{>see~}}\n' +
      '{{>since~}}\n' +
      '{{>version~}}\n' +
      '{{>authors~}}\n' +
      '{{>license~}}\n' +
      '{{>copyright~}}\n' +
      '{{>todo~}}\n' +
      '{{>params~}}\n' +
      '{{>properties~}}\n' +
      '{{>examples~}}\n'
  ],
  [
    'category',
    '{{#if category}}**Category**: {{inlineLinks category}}  \n{{/if~}}'
  ],
  [
    'chainable',
    '{{#if chainable}}**Chainable**  \n{{/if~}}'
  ],
  [
    'copyright',
    '{{#if copyright}}**Copyright**: {{{inlineLinks copyright}}}  \n{{/if~}}\n'
  ],
  [
    'customTags',
    '{{#if customTags}}{{#each customTags}}**{{titleCase tag}}**: {{#with (parseType value)~}}\n' +
      '{{#if type}}{{>link to=type}}{{/if}}{{#if description}}{{{inlineLinks description}}}{{/if}}{{/with}}  \n' +
      '{{/each}}{{/if~}}\n'
  ],
  [
    'default',
    '{{#unless (equal defaultvalue undefined)}}**Default**: {{>defaultvalue}}  \n' +
      '{{/unless}}'
  ],
  [
    'deprecated',
    '{{#if deprecated}}***Deprecated***\n\n{{/if~}}'
  ],
  [
    'description',
    '{{#if description}}{{{inlineLinks description}}}\n\n{{/if}}'
  ],
  [
    'examples',
    '{{#examples}}\n' +
      '**Example**{{#if caption}} *({{caption}})*  {{else}}  {{/if}}\n' +
      '{{{inlineLinks example}}}\n' +
      '{{/examples}}\n'
  ],
  [
    'fires',
    '{{#if fires~}}\n' +
      '**Emits**: {{>linked-type-list types=fires delimiter=", " }}  \n' +
      '{{/if}}'
  ],
  [
    'implements',
    '{{#if implements}}**Implements**: {{>linked-type-list types=implements delimiter=", " }}  \n' +
      '{{/if}}\n'
  ],
  [
    'license',
    '{{#if license}}**License**: {{inlineLinks license}}  \n{{/if~}}'
  ],
  [
    'mixes',
    '{{#if mixes~}}\n' +
      '**Mixes**: {{>linked-type-list types=mixes delimiter=", " }}  \n' +
      '{{/if}}'
  ],
  [
    'overrides',
    '{{#if overrides}}**Overrides**: {{>link to=overrides}}  \n{{/if~}}\n'
  ],
  [
    'param-table-name',
    '{{#if optional}}[{{/if~}}\n' +
      '{{#if variable}}...{{/if~}}\n' +
      '{{{name}~}}\n' +
      '{{#if optional}}]{{/if}}'
  ],
  [
    'params-list',
    '{{#if params}}\n' +
      '{{#params}}**Params**\n' +
      '\n' +
      '{{#each this~}}\n' +
      '{{indent}}- {{name}}{{#if type}} {{>linked-type-list types=type.names delimiter=" | " }}{{/if}}{{#unless (equal defaultvalue undefined)}} {{>defaultvalue equals=true ~}}{{/unless}}{{#if description}} - {{{inlineLinks description}}}{{/if}}\n' +
      '{{/each}}\n' +
      '\n' +
      '{{/params~}}\n' +
      '{{/if}}'
  ],
  [
    'params-table-html',
    '{{#if params}}\n' +
      '<table>\n' +
      '  <thead>\n' +
      '    <tr>\n' +
      '      {{#each (tableHeadHtml params "name|Param" "type|Type" "defaultvalue|Default" "description|Description")}}<th>{{this}}</th>{{/each}}\n' +
      '    </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '    {{#tableRow params "name" "type" "defaultvalue" "description" ~}}\n' +
      '    <tr>\n' +
      '    {{#if @col1}}<td>{{>param-table-name}}</td>{{/if~}}\n' +
      '    {{#if @col2}}<td>{{>linked-type-list types=type.names delimiter=" | " html=true}}</td>{{/if~}}\n' +
      '    {{#if @col3}}<td>{{>defaultvalue}}</td>{{/if~}}\n' +
      '    {{#if @col4}}<td>{{{md (inlineLinks description)}}}</td>{{/if}}\n' +
      '    </tr>\n' +
      '    {{~/tableRow}}\n' +
      '  </tbody>\n' +
      '</table>\n' +
      '\n' +
      '{{/if}}'
  ],
  [
    'params-table',
    '{{#if params}}\n' +
      '\n' +
      '{{tableHead params "name|Param" "type|Type" "defaultvalue|Default" "description|Description" ~}}\n' +
      '\n' +
      '{{#tableRow params "name" "type" "defaultvalue" "description" ~}}\n' +
      '| {{#if @col1}}{{>param-table-name}} | {{/if~}}\n' +
      '{{#if @col2}}{{>linked-type-list types=type.names delimiter=" \\| " }} | {{/if~}}\n' +
      '{{#if @col3}}{{>defaultvalue}} | {{/if~}}\n' +
      '{{#if @col4}}{{{stripNewlines (inlineLinks description)}}} |{{/if}}\n' +
      '{{/tableRow}}\n' +
      '\n' +
      '{{/if}}'
  ],
  [
    'params',
    '{{#if (optionEquals "param-list-format" "list")}}{{>params-list~}}{{/if~}}\n' +
      '{{#if (optionEquals "param-list-format" "table")~}}\n' +
      '{{#if (optionEquals "no-gfm" true)}}{{>params-table-html~}}{{else}}{{>params-table~}}{{/if~}}\n' +
      '{{/if~}}\n'
  ],
  [
    'properties-list',
    '{{#if properties}}**Properties**\n' +
      '\n' +
      '{{#each properties~}}\n' +
      '{{#if (regexp-test name "\\w+\\.\\w+")}}  {{/if}}- {{{name}}} {{>linked-type-list types=type.names delimiter=" \\| " ~}}{{#if description}} - {{{inlineLinks description}}}{{/if}}  \n' +
      '{{/each}}\n' +
      '\n' +
      '{{/if~}}'
  ],
  [
    'properties-table-html',
    '{{#if properties~}}**Properties**\n' +
      '\n' +
      '<table>\n' +
      '  <thead>\n' +
      '    <tr>\n' +
      '      {{#each (tableHeadHtml properties "name|Name" "type|Type" "defaultvalue|Default" "description|Description")}}<th>{{this}}</th>{{/each}}\n' +
      '    </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '    {{#tableRow properties "name" "type" "defaultvalue" "description" ~}}\n' +
      '    <tr>\n' +
      '    {{#if @col1}}<td>{{>param-table-name}}</td>{{/if~}}\n' +
      '    {{#if @col2}}<td>{{>linked-type-list types=type.names delimiter=" | " html=true}}</td>{{/if~}}\n' +
      '    {{#if @col3}}<td>{{>defaultvalue}}</td>{{/if~}}\n' +
      '    {{#if @col4}}<td>{{{md (inlineLinks description)}}}</td>{{/if}}\n' +
      '    </tr>\n' +
      '    {{~/tableRow}}\n' +
      '  </tbody>\n' +
      '</table>\n' +
      '\n' +
      '{{/if}}'
  ],
  [
    'properties-table',
    '{{#if properties}}**Properties**\n' +
      '\n' +
      '{{tableHead properties "name|Name" "type|Type" "defaultvalue|Default" "description|Description" ~}}\n' +
      '\n' +
      '{{#tableRow properties "name" "type" "defaultvalue" "description" ~}}\n' +
      '| {{#if @col1}}{{>param-table-name}} | {{/if~}}\n' +
      '{{#if @col2}}{{>linked-type-list types=type.names delimiter=" \\| " }} | {{/if~}}\n' +
      '{{#if @col3}}{{>defaultvalue}} | {{/if~}}\n' +
      '{{#if @col4}}{{{stripNewlines (inlineLinks description)}}} |{{/if}}\n' +
      '{{/tableRow}}\n' +
      '\n' +
      '{{/if}}'
  ],
  [
    'properties',
    '{{#if (optionEquals "property-list-format" "list")}}{{>properties-list~}}{{/if~}}\n' +
      '{{#if (optionEquals "property-list-format" "table")~}}\n' +
      '  {{#if (optionEquals "no-gfm" true)}}{{>properties-table-html}}{{else}}{{>properties-table}}{{/if~}}\n' +
      '{{/if~}}\n'
  ],
  [
    'readOnly',
    '{{#if readonly}}**Read only**: true  \n{{/if~}}'
  ],
  [
    'requires',
    '{{#if requires~}}\n' +
      '**Requires**: {{>linked-type-list types=requires delimiter=", " }}  \n' +
      '{{/if}}'
  ],
  [
    'returns',
    '{{#if returns}}\n' +
      '{{#if returns.[0].description~}}\n' +
      '**Returns**: {{#each returns~}}\n' +
      '  {{#if type~}}\n' +
      '  {{#if type.names}}{{>linked-type-list types=type.names delimiter=" \\| " ~}}{{/if}}\n' +
      '  {{~#if description}} - {{{inlineLinks description}}}{{/if~}}\n' +
      '  {{else~}}\n' +
      '  {{{inlineLinks description}~}}\n' +
      '  {{/if~}}\n' +
      '{{~/each}}\n' +
      '  \n' +
      '{{/if}}{{/if}}'
  ],
  [
    'scope',
    '{{#if scope}}\n' +
      '**Kind**: {{#if (equal kind "event") ~}}\n' +
      'event emitted{{#if memberof}} by {{>link to=memberof}}{{/if}}  \n' +
      '{{else~}}\n' +
      '{{scope}} {{#if virtual}}abstract {{/if}}{{kindInThisContext}}{{#if memberof}} of {{>link to=memberof}}{{/if}}  \n' +
      '{{/if~}}\n' +
      '{{else~}}\n' +
      '{{#if isExported}}**Kind**: Exported {{kind}}  \n' +
      '{{/if~}}\n' +
      '{{/if~}}'
  ],
  [
    'see',
    '{{#if see~}}\n' +
      '\n' +
      '{{#if (equal see.length 1)~}}\n' +
      '**See**: {{{inlineLinks see.[0]}}}  \n' +
      '{{else~}}\n' +
      '**See**\n' +
      '\n' +
      '{{#each see}}- {{{inlineLinks this}}}\n' +
      '{{/each}}\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{/if~}}'
  ],
  [
    'since',
    '{{#if since}}**Since**: {{{inlineLinks since}}}  \n{{/if~}}'
  ],
  [
    'summary',
    '{{#if summary}}**Summary**: {{{inlineLinks summary}}}  \n{{/if~}}\n'
  ],
  [
    'this',
    '{{#if thisvalue}}**this**: {{>link to=thisvalue}}  \n{{/if~}}'
  ],
  [
    'throws',
    '{{#if exceptions~}}\n' +
      '**Throws**:\n' +
      '\n' +
      '{{#each exceptions~}}\n' +
      '- {{#if type.names}}{{>linked-type-list types=type.names}} {{/if}}{{{inlineLinks description}}}\n' +
      '{{/each}}\n' +
      '\n' +
      '{{/if}}'
  ],
  [
    'todo',
    '{{#if todoList~}}\n' +
      '**Todo**\n' +
      '\n' +
      '{{#if (option "no-gfm")~}}\n' +
      '\n' +
      '{{#each todoList~}}\n' +
      '{{#if done}}- {{{inlineLinks task}}} ✓\n' +
      '{{else}}- {{{inlineLinks task}}}\n' +
      '{{/if~}}\n' +
      '{{/each~}}\n' +
      '\n' +
      '{{else~}}\n' +
      '\n' +
      '{{#each todoList~}}\n' +
      '{{#if done}}- [x] {{{inlineLinks task}}}\n' +
      '{{else}}- [ ] {{{inlineLinks task}}}\n' +
      '{{/if~}}\n' +
      '{{/each~}}\n' +
      '\n' +
      '{{/if}}\n' +
      '\n' +
      '{{/if~}}\n'
  ],
  [
    'version',
    '{{#if version}}**Version**: {{inlineLinks version}}  \n{{/if~}}'
  ],
  [
    'docs',
    '{{>header~}}\n{{>body}}\n{{>member-index~}}\n{{>separator~}}\n{{>members~}}\n'
  ],
  [
    'header',
    '<a name="{{{anchorName}}}"></a>\n\n{{>heading-indent}}{{>sig-name}}\n'
  ],
  [
    'member-index-grouped',
    '{{string-repeat "    " (add level baseLevel)}}* {{#unless (equal _title undefined)}}_{{_title}}_{{else}}{{>sig-link}}{{/unless}}\n' +
      '{{#groupBy (option "group-by")~}}\n' +
      '{{>member-index-grouped baseLevel=(add ../level ../baseLevel 1)~}}\n' +
      '{{/groupBy~}}\n'
  ],
  [
    'member-index-list',
    '{{>index-indent}}* {{>sig-link-parent}}\n' +
      '{{#indexChildren ~}}\n' +
      '{{>member-index-list~}}\n' +
      '{{/indexChildren}}'
  ],
  [
    'member-index',
    '{{setLevel this 0~}}\n' +
      "{{#if (descendants min=(option 'memberIndex.minDescendants'))~}}\n" +
      '{{#if isExported~}}\n' +
      '{{#if (equal (depth) 0)}}\n' +
      '{{#if (optionEquals "member-index-format" "list")}}\n' +
      '\n' +
      '{{>member-index-list}}\n' +
      '\n' +
      '{{else~}}\n' +
      '\n' +
      '{{>member-index-grouped}}\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{/if~}}\n' +
      '{{else~}}\n' +
      '{{#if (optionEquals "member-index-format" "list")}}\n' +
      '\n' +
      '{{>member-index-list}}\n' +
      '\n' +
      '{{else}}\n' +
      '\n' +
      '{{>member-index-grouped}}\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{/if~}}\n' +
      '{{/if}}\n'
  ],
  [
    'members',
    '{{#children inherited=undefined ~}}\n{{>docs~}}\n{{/children~}}\n'
  ],
  [
    'global-index-dl',
    '{{#globals kind=kind ~}}\n' +
      '{{#if @first~}}{{>heading-indent}}{{../title}}\n' +
      '\n' +
      '<dl>\n' +
      '{{/if~}}\n' +
      '<dt>{{>sig-link-html}}</dt>\n' +
      '<dd>{{{md (inlineLinks description)}}}</dd>\n' +
      '{{#if @last~}}</dl>\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{/globals~}}\n'
  ],
  [
    'global-index-grouped',
    '{{#globals kind=kind~}}\n' +
      '{{#if @first~}}{{>heading-indent}}{{../title}}\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{>member-index-grouped~}}\n' +
      '{{#if @last}}\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{/globals}}\n'
  ],
  [
    'global-index-kinds',
    '{{#unless (optionEquals "global-index-format" "none")~}}\n' +
      '{{#if (optionEquals "global-index-format" "dl")}}\n' +
      '{{>global-index-dl kind=kind title=title ~}}\n' +
      '{{/if~}}\n' +
      '{{#if (optionEquals "global-index-format" "grouped")}}\n' +
      '{{>global-index-grouped kind=kind title=title }}\n' +
      '{{/if~}}\n' +
      '{{#if (optionEquals "global-index-format" "table")}}\n' +
      '{{>global-index-table kind=kind title=title ~}}\n' +
      '{{/if~}}\n' +
      '{{/unless~}}\n'
  ],
  [
    'global-index-table',
    '{{#globals kind=kind~}}\n' +
      '{{#if @first~}}\n' +
      '{{>heading-indent}}{{../title}}\n' +
      '\n' +
      '<table>\n' +
      '  <thead>\n' +
      '    <tr>\n' +
      '      <th>Global</th><th>Description</th>\n' +
      '    </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '{{/if~}}\n' +
      '    <tr>\n' +
      '    <td>{{>sig-link-html}}</td>\n' +
      '    <td>{{{md (inlineLinks description)}}}</td>\n' +
      '    </tr>\n' +
      '{{#if @last~}}\n' +
      '  </tbody>\n' +
      '</table>\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{/globals}}\n'
  ],
  [
    'global-index',
    '{{>global-index-kinds kind="class" title="Classes" ~}}\n' +
      '{{>global-index-kinds kind="mixin" title="Mixins" ~}}\n' +
      '{{>global-index-kinds kind="member" title="Members" ~}}\n' +
      '{{>global-index-kinds kind="namespace" title="Objects" ~}}\n' +
      '{{>global-index-kinds kind="constant" title="Constants" ~}}\n' +
      '{{>global-index-kinds kind="function" title="Functions" ~}}\n' +
      '{{>global-index-kinds kind="event" title="Events" ~}}\n' +
      '{{>global-index-kinds kind="typedef" title="Typedefs" ~}}\n' +
      '{{>global-index-kinds kind="external" title="External" ~}}\n' +
      '{{>global-index-kinds kind="interface" title="Interfaces" ~}}\n'
  ],
  [
    'main-index',
    '{{! a main index is only shown if at least 2 global or modules exist ~}}\n' +
      '\n' +
      '{{#if (showMainIndex)~}}\n' +
      '{{>module-index~}}\n' +
      '{{>global-index~}}\n' +
      '{{/if~}}\n'
  ],
  [
    'module-index-dl',
    '{{#modules~}}\n' +
      '{{#if @first~}}{{>heading-indent}}Modules\n' +
      '\n' +
      '<dl>\n' +
      '{{/if~}}\n' +
      '<dt>{{>sig-link-html}}</dt>\n' +
      '<dd>{{{md (inlineLinks description)}}}</dd>\n' +
      '{{#if @last~}}</dl>\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{/modules~}}\n'
  ],
  [
    'module-index-grouped',
    '{{#modules~}}\n' +
      '{{#if @first~}}{{>heading-indent}}Modules\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{>member-index-grouped~}}\n' +
      '{{/modules}}\n' +
      '\n'
  ],
  [
    'module-index-table',
    '{{#modules~}}\n' +
      '{{#if @first~}}\n' +
      '{{>heading-indent}}Modules\n' +
      '\n' +
      '<table>\n' +
      '  <thead>\n' +
      '    <tr>\n' +
      '      <th>Module</th><th>Description</th>\n' +
      '    </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '{{/if~}}\n' +
      '    <tr>\n' +
      '    <td>{{>sig-link-html}}</td>\n' +
      '    <td>{{{md (inlineLinks description)}}}</td>\n' +
      '    </tr>\n' +
      '{{#if @last~}}\n' +
      '  </tbody>\n' +
      '</table>\n' +
      '\n' +
      '{{/if~}}\n' +
      '{{/modules}}\n'
  ],
  [
    'module-index',
    '{{#unless (optionEquals "module-index-format" "none")~}}\n' +
      '{{#if (optionEquals "module-index-format" "dl")}}{{>module-index-dl ~}}{{/if~}}\n' +
      '{{#if (optionEquals "module-index-format" "grouped")}}{{>module-index-grouped ~}}{{/if~}}\n' +
      '{{#if (optionEquals "module-index-format" "table")}}{{>module-index-table ~}}{{/if~}}\n' +
      '{{/unless~}}\n'
  ],
  [
    'main',
    '{{>main-index~}}\n{{>all-docs~}}\n'
  ],
  [
    'heading-indent',
    '{{string-repeat "#" (headingDepth)}} '
  ],
  [
    'index-indent',
    '{{string-repeat "    " (indexDepth)}}'
  ],
  [
    'separator',
    '{{#if (option "separators")}}\n\n* * *\n\n{{/if~}}'
  ],
  [
    'sig-link-html',
    '{{#if name}}{{#sig no-gfm=true ~}}\n' +
      '{{{@depOpen}~}}\n' +
      '<a href="#{{{anchorName}}}">\n' +
      '{{~{@codeOpen}~}}\n' +
      '{{#if @prefix}}{{@prefix}} {{/if~}}\n' +
      '{{@accessSymbol}}{{#if (isEvent)}}"{{{name}}}"{{else}}{{{name}}}{{/if~}}\n' +
      '{{~#if @methodSign}}{{#if (isEvent)}} {{@methodSign}}{{else}}{{@methodSign}}{{/if}}{{/if~}}\n' +
      '{{{@codeClose}~}}\n' +
      '</a>\n' +
      '{{~#if @returnSymbol}} {{@returnSymbol}}{{/if~}}\n' +
      '{{#if @returnTypes}} {{>linked-type-list types=@returnTypes html=true delimiter=" | " }}{{/if~}}\n' +
      '{{#if @suffix}} {{@suffix}}{{/if~}}\n' +
      '{{{@depClose}~}}\n' +
      '{{~/sig}}{{/if~}}\n'
  ],
  [
    'sig-link-parent',
    '{{#if name}}{{#sig~}}\n' +
      '{{{@depOpen}~}}\n' +
      '[{{{@codeOpen}~}}\n' +
      '{{#if @prefix}}{{@prefix}} {{/if~}}\n' +
      '{{#if (isClassMember)}}{{@parent~}}{{/if~}}\n' +
      '{{@accessSymbol}}{{#if (isEvent)}}"{{{name}}}"{{else}}{{{name}}}{{/if~}}\n' +
      '{{~#if @methodSign}}{{#if (isEvent)}} {{@methodSign}}{{else}}{{@methodSign}}{{/if}}{{/if~}}\n' +
      '{{{@codeClose}}}](#{{{anchorName}}})\n' +
      '{{~#if @returnSymbol}} {{@returnSymbol}}{{/if~}}\n' +
      '{{#if @returnTypes}} {{>linked-type-list types=@returnTypes delimiter=" \\| " }}{{/if~}}\n' +
      '{{#if @suffix}} {{@suffix}}{{/if~}}\n' +
      '{{{@depClose}~}}\n' +
      '{{~/sig}}{{/if~}}\n'
  ],
  [
    'sig-link',
    '{{#if virtual}}*{{/if}}{{#with (parentObject)}}{{#if virtual}}*{{/if~}}{{/with~}}\n' +
      '{{#if name}}{{#sig~}}\n' +
      '{{{@depOpen}~}}\n' +
      '[{{{@codeOpen}~}}\n' +
      '{{#if @prefix}}{{@prefix}} {{/if~}}\n' +
      '{{@accessSymbol}}{{#if (isEvent)}}"{{{name}}}"{{else}}{{{name}}}{{/if~}}\n' +
      '{{~#if @methodSign}}{{#if (isEvent)}} {{@methodSign}}{{else}}{{@methodSign}}{{/if}}{{/if~}}\n' +
      '{{{@codeClose}}}](#{{{anchorName}}})\n' +
      '{{~#if @returnSymbol}} {{@returnSymbol}}{{/if~}}\n' +
      '{{#if @returnTypes}} {{>linked-type-list types=@returnTypes delimiter=" \\| " }}{{/if~}}\n' +
      '{{#if @suffix}} {{@suffix}}{{/if~}}\n' +
      '{{{@depClose}~}}\n' +
      '{{~/sig}}{{/if~}}\n' +
      '{{#if virtual}}*{{/if}}{{#with (parentObject)}}{{#if virtual}}*{{/if~}}{{/with~}}\n'
  ],
  [
    'sig-name',
    '{{#if virtual}}*{{/if}}{{#with (parentObject)}}{{#if virtual}}*{{/if~}}{{/with~}}\n' +
      '{{#if name}}{{#sig~}}\n' +
      '{{{@depOpen}~}}\n' +
      '{{{@codeOpen}~}}\n' +
      '{{#if @prefix}}{{@prefix}} {{/if~}}\n' +
      '{{@parent~}}\n' +
      '{{@accessSymbol}}{{#if (isEvent)}}"{{{name}}}"{{else}}{{{escape name}}}{{/if~}}\n' +
      '{{#if @methodSign}}{{#if (isEvent)}} {{@methodSign}}{{else}}{{@methodSign}}{{/if}}{{/if~}}\n' +
      '{{{@codeClose}~}}\n' +
      '{{#if @returnSymbol}} {{@returnSymbol}}{{/if~}}\n' +
      '{{#if @returnTypes}} {{>linked-type-list types=@returnTypes delimiter=" \\| " }}{{/if~}}\n' +
      '{{#if @suffix}} {{@suffix}}{{/if~}}\n' +
      '{{{@depClose}~}}\n' +
      '{{~/sig}}{{/if~}}\n' +
      '{{#if virtual}}*{{/if}}{{#with (parentObject)}}{{#if virtual}}*{{/if~}}{{/with~}}\n'
  ],
  [
    'defaultvalue',
    '{{#unless (equal defaultvalue undefined)}}<code>{{#if equals}} = {{/if}}{{#if (equal type.names.[0] "string")}}{{json-stringify defaultvalue}}{{else}}{{defaultvalue}}{{/if}}</code>{{/unless}}'
  ],
  [
    'link',
    '{{! usage: link to="namepath" html=true/false caption="optional caption"~}}\n' +
      '\n' +
      '{{~#if html~}}\n' +
      '<code>\n' +
      '\n' +
      '{{~#link to~}}\n' +
      '{{#if url~}}\n' +
      '<a href="{{{url}}}">{{#if ../../caption}}{{../../../caption}}{{else}}{{name}}{{/if}}</a>\n' +
      '{{~else~}}\n' +
      '{{#if ../../caption}}{{../../../caption}}{{else}}{{name}}{{/if~}}\n' +
      '{{/if~}}\n' +
      '{{/link~}}\n' +
      '\n' +
      '</code>\n' +
      '{{~else~}}\n' +
      '\n' +
      '{{#link to~}}\n' +
      '{{#if url~}}\n' +
      '[<code>{{#if ../../caption}}{{escape ../../../caption}}{{else}}{{escape name}}{{/if}}</code>]({{{url}}})\n' +
      '{{~else~}}\n' +
      '<code>{{#if ../../caption}}{{escape ../../../caption}}{{else}}{{escape name}}{{/if~}}</code>\n' +
      '{{~/if~}}\n' +
      '{{/link~}}\n' +
      '\n' +
      '{{/if~}}\n'
  ],
  [
    'linked-type-list',
    '{{#each types~}}\n' +
      '{{>link to=this html=../html ~}}\n' +
      '{{#unless @last}}{{{../delimiter}}}{{/unless~}}\n' +
      '{{/each}}'
  ]
]
