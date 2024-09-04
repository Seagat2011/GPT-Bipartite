
/* A sample uuid filter structure which assumes all uuids are physical memory addresses, 
and that input tokens can be recovered from the filter's weights and biases  */
sample_uuid_filters_structure = 
[
    [/* weights */ [0,10,2],    /* biases */   [14],  /* filter-attribute: false*/ 0 ], /* uuid 0x0 */
    [/* weights */      [0],    /* biases */   [0],   /* filter-attribute: true */ 1 ], /* uuid 0x1 */
    [/* weights */ [10,11,2],   /* biases */   [8],   /* filter-attribute: false*/ 0 ], /* uuid 0x2 */
    [/* weights */ [20,18,4],   /* biases */   [11],  /* filter-attribute: false*/ 0 ], /* uuid 0x3 */
    [/* weights */ [50,19,7],   /* biases */   [16],  /* filter-attribute: false*/ 0 ], /* uuid 0x4 */
];

/*
Example NLP_Encoder training input: "A bushel of five apples sit in a woven basket on the table."
[65​,32​,98​,117,​115,​104,​101,​108,​32,​111,​102,​32,​102,​105,​118,​101,​32,​97,​112,​112,​108,​101,​115,​32,​115,​105,
​116,​32,​105,​110,​32,​97,​32,​119,​111,​118,​101,​110,​32,​98,​97,​115,​107,​101,​116,​32,​111,​110,​32,​116,104,101,​32,
​116,​97,​98,​108,​101,​46]

Example NLP_Decoder input: "How many apples sit in a woven basket on the table?"
[72,111,119,32,109,97,110,121,32,97,112,112,108,101,115,32,115,105,116,32,105,110,
32,97,32,119,111,118,101,110,32,98,97,115,107,101,116,32,111,110,32,116,104,101,32,
116,97,98,108,101,63]

Example NLP_Decoder output: "Five apples sit in a woven basket on the table."
[70,105,118,101,32,97,112,112,108,101,115,32,115,105,116,32,105,110,32,97,32,
119,111,118,101,110,32,98,97,115,107,101,116,32,111,110,32,116,104,101,32,116,
97,98,108,101,46]
*/