{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Monaco;}
{\colortbl;\red255\green255\blue255;\red255\green255\blue255;\red0\green0\blue0;\red226\green131\blue14;
\red20\green152\blue106;\red212\green20\blue102;}
{\*\expandedcolortbl;;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c0\c0;\cssrgb\c91373\c58431\c4706;
\cssrgb\c0\c65098\c49020;\cssrgb\c87451\c18824\c47451;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 document.\cf4 \cb3 \strokec4 getElementById\cf2 \cb3 \strokec2 (\cf5 \strokec5 "generateBtn"\cf2 \strokec2 ).\cf4 \cb3 \strokec4 addEventListener\cf2 \cb3 \strokec2 (\cf5 \strokec5 "click"\cf2 \strokec2 , \cf4 \cb3 \strokec4 function\cf2 \cb3 \strokec2 () \{\
    const words = \cf6 \strokec6 [\cf5 \strokec5 "fishing"\cf6 \strokec6 , \cf5 \strokec5 "coding"\cf6 \strokec6 , \cf5 \strokec5 "reading"\cf6 \strokec6 , \cf5 \strokec5 "hiking"\cf6 \strokec6 , \cf5 \strokec5 "cooking"\cf6 \strokec6 , \cf5 \strokec5 "running"\cf6 \strokec6 , \cf5 \strokec5 "swimming"\cf6 \strokec6 , \cf5 \strokec5 "painting"\cf6 \strokec6 ]\cf2 \strokec2 ;\
    const randomIndex = Math\cf6 \strokec6 .floor\cf2 \strokec2 (Math\cf6 \strokec6 .random\cf2 \strokec2 () * words\cf6 \strokec6 .length\cf2 \strokec2 );\
    const randomWord = words\cf6 \strokec6 [randomIndex]\cf2 \strokec2 ;\
    document\cf6 \strokec6 .getElementById\cf2 \strokec2 ("randomWord")\cf6 \strokec6 .innerHTML\cf2 \strokec2  = randomWord;\
\});}