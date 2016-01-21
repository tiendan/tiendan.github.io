#rm latex/resume.aux
#rm latex/resume.log
#rm latex/resume.pdf
#rm latex/resume.bcf
#rm latex/resume.out
#rm latex/resume.run.xml
rm onurferhat.pdf
cd latex
xelatex onurferhat.tex
cd ..
cp latex/onurferhat.pdf .
#rm -rf out
#hackmyresume BUILD onurferhat-resume.json TO out/onurferhat-resume.all -t awesome
#cd out/src/latex/examples
#xelatex resume.tex
#cd ../../../..
#cp out/src/latex/examples/resume.pdf ./onurferhat-resume.pdf