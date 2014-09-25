#exported class API

<a name="exp_module_file-set^FileSet"></a>
##class: FileSet ⏏
Expands file patterns, returning the matched and unmatched files and directories

* [class: FileSet ⏏](#exp_module_file-set^FileSet)
  * [new FileSet(patternList)](#new_module_file-set^FileSet◊)
  * [fileSet.list](#module_file-set^FileSet#list)
  * [fileSet.files](#module_file-set^FileSet#files)
  * [fileSet.dirs](#module_file-set^FileSet#dirs)
  * [fileSet.notExisting](#module_file-set^FileSet#notExisting)
  * [fileSet.add(files)](#module_file-set^FileSet#add)
  * [enum: FileSet.eFileType](#module_file-set^FileSet.eFileType)

<a name="new_module_file-set^FileSet◊"></a>
###new FileSet(patternList)
**Params**

- patternList `string` | `Array.<string>` - A pattern, or array of patterns to expand  

<a name="module_file-set^FileSet#list"></a>
###fileSet.list
The full list of unique paths found, and not found.

**Type**: `Array.<string>`  
<a name="module_file-set^FileSet#files"></a>
###fileSet.files
The existing files found

**Type**: `Array.<string>`  
<a name="module_file-set^FileSet#dirs"></a>
###fileSet.dirs
The existing directories found

**Type**: `Array.<string>`  
<a name="module_file-set^FileSet#notExisting"></a>
###fileSet.notExisting
Paths which were not found

**Type**: `Array.<string>`  
<a name="module_file-set^FileSet#add"></a>
###fileSet.add(files)
add file patterns to the set

**Params**

- files `string` | `Array.<string>` - A pattern, or array of patterns to expand  

<a name="module_file-set^FileSet.eFileType"></a>
###enum: FileSet.eFileType
Enum for the `type` value of each record in `fileSet.list`

**Type**: `number`  
**Properties**: `NOEXIST`, `FILE`, `DIR`  
**Read only**: true  
