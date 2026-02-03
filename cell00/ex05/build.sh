if [ $# -eq 0 ]; then #กลับไปดู argv.sh
    echo "No arguments supplied"
else
    for arg in "$@" #$@ = กี่ตัวกะดั้ย arg ก้ฟีลๆ i (dummy)
    do
        mkdir "ex$arg" # ex+ชื่อ str ที่ได้มา
    done
fi