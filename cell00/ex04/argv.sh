if [ $# -eq 0 ]; then # if T then do
    echo "No arguments supplied"
else
    if [ -n "$1" ]; then # !null then do 
        echo "$1"
    fi #ฟีลๆปีกกาปิด if fi
    if [ -n "$2" ]; then 
        echo "$2" #น่าจะเลข indx 
    fi
    if [ -n "$3" ]; then
        echo "$3"
    fi
fi