const { z } = require("zod");

// Schema for interview questions request
const generateInterviewQuestionsSchema = z.object({
  role: z.string().min(1, "Role is required"),
  experience: z.string().min(1, "Experience is required"),
  topicsToFocus: z.array(z.string()).min(1, "At least one topic is required"),
  numberOfQuestions: z.number().int().positive("Number of questions must be positive"),
});

// Schema for concept explanation request
const generateConceptExplanationSchema = z.object({
  question: z.string().min(1, "Question is required"),
});

// Schema for interview tips request
const generateInterviewTipsSchema = z.object({
  role: z.string().min(1, "Role is required"),
  experience: z.string().min(1, "Experience is required"),
});


const validateGenerateInterviewQuestions = (req,res,next)=>{

    try {
        generateInterviewQuestionsSchema.parse(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: err.errors.map(e => ({
            field: e.path.join("."),
            message: e.message,
      })),
    });
    }
}

const validateGenerateConceptExplanation = (req,res,next)=>{

    try {
        generateConceptExplanationSchema.parse(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: err.errors.map(e => ({
            field: e.path.join("."),
            message: e.message,
      })),
    })
}}

const validateGenerateInterviewTips = (req, res, next) => {
  try {
    generateInterviewTipsSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.errors.map(e => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
  }
};

module.exports = {
  validateGenerateInterviewQuestions,
  validateGenerateConceptExplanation,
  validateGenerateInterviewTips,
};