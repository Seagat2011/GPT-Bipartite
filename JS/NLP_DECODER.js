
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
Provide missing features during testing, to verify
functionality of the decoder.
*/

/*
Example NLP_Encoder training input: "A bushel of five apples sit in a woven basket on a table."
Example NLP_Decoder input: "How many apples sit in a woven basket on the table?"
Example NLP_Decoder output: "Five apples sit in a woven basket on the table."
*/