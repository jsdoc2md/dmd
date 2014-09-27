<a name="module_file-set"></a>
##file-set
Exports a contructor taking a list of file patterns as input, returning a `file-set` instance containing the expanded patterns split into separate lists of `files`, `dirs` and `notExisting`.

**Example**  
```js
var fileSet = require("file-set");
```

* [file-set](#module_file-set)
  * [class: FileSet](#exp_module_file-set^FileSet) ⏏
    * [new FileSet(patternList)](#new_module_file-set^FileSet_new)
    * [fileSet.list](#module_file-set^FileSet#list) → `Array.<string>`
    * [fileSet.files](#module_file-set^FileSet#files) → `Array.<string>`
    * [fileSet.dirs](#module_file-set^FileSet#dirs) → `Array.<string>`
    * [fileSet.notExisting](#module_file-set^FileSet#notExisting) → `Array.<string>`
    * [fileSet.add(files)](#module_file-set^FileSet#add)
    * [enum: FileSet.eFileType](#module_file-set^FileSet.eFileType) → `number`

<a name="exp_module_file-set^FileSet"></a>
###class: FileSet ⏏
Expands file patterns, returning the matched and unmatched files and directories

<a name="new_module_file-set^FileSet_new"></a>
####new FileSet(patternList)
| Param | Type | Description |
| ----- | ---- | ----------- |
| patternList | `string` \| `Array.<string>` | A pattern, or array of patterns to expand |

<a name="module_file-set^FileSet#list"></a>
####fileSet.list → `Array.<string>`
The full list of unique paths found, and not found.

**Type**: `Array.<string>`  
<a name="module_file-set^FileSet#files"></a>
####fileSet.files → `Array.<string>`
The existing files found

**Type**: `Array.<string>`  
<a name="module_file-set^FileSet#dirs"></a>
####fileSet.dirs → `Array.<string>`
The existing directories found

**Type**: `Array.<string>`  
<a name="module_file-set^FileSet#notExisting"></a>
####fileSet.notExisting → `Array.<string>`
Paths which were not found

**Type**: `Array.<string>`  
<a name="module_file-set^FileSet#add"></a>
####fileSet.add(files)
add file patterns to the set

| Param | Type | Description |
| ----- | ---- | ----------- |
| files | `string` \| `Array.<string>` | A pattern, or array of patterns to expand |

<a name="module_file-set^FileSet.eFileType"></a>
####enum: FileSet.eFileType → `number`
Enum for the `type` value of each record in `fileSet.list`

**Type**: `number`  
**Properties**: `NOEXIST`, `FILE`, `DIR`  
**Read only**: true  
