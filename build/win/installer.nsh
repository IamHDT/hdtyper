!macro customInstall
  WriteRegStr HKCU "Software\Classes\Directory\Background\shell\Hdtyper" "" "Open Hdtyper here"
  WriteRegStr HKCU "Software\Classes\Directory\Background\shell\Hdtyper" "Icon" "$appExe"
  WriteRegStr HKCU "Software\Classes\Directory\Background\shell\Hdtyper\command" "" `$appExe "%V"`

  WriteRegStr HKCU "Software\Classes\Directory\shell\Hdtyper" "" "Open Hdtyper here"
  WriteRegStr HKCU "Software\Classes\Directory\shell\Hdtyper" "Icon" "$appExe"
  WriteRegStr HKCU "Software\Classes\Directory\shell\Hdtyper\command" "" `$appExe "%V"`

  WriteRegStr HKCU "Software\Classes\Drive\shell\Hdtyper" "" "Open Hdtyper here"
  WriteRegStr HKCU "Software\Classes\Drive\shell\Hdtyper" "Icon" "$appExe"
  WriteRegStr HKCU "Software\Classes\Drive\shell\Hdtyper\command" "" `$appExe "%V"`
!macroend

!macro customUnInstall
  DeleteRegKey HKCU "Software\Classes\Directory\Background\shell\Hdtyper"
  DeleteRegKey HKCU "Software\Classes\Directory\shell\Hdtyper"
  DeleteRegKey HKCU "Software\Classes\Drive\shell\Hdtyper"
!macroend
