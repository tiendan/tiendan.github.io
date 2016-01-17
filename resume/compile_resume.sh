#rm latex/resume.aux
#rm latex/resume.log
#rm latex/resume.pdf
#rm latex/resume.bcf
#rm latex/resume.out
#rm latex/resume.run.xml
rm resume.pdf
cd latex
./biber resume
xelatex resume.xtx
cd ..
cp latex/resume.pdf .
#rm -rf out
#hackmyresume BUILD onurferhat-resume.json TO out/onurferhat-resume.all -t awesome
#cd out/src/latex/examples
#xelatex resume.tex
#cd ../../../..
#cp out/src/latex/examples/resume.pdf ./onurferhat-resume.pdf