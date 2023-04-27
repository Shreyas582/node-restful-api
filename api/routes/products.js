const express = require("express");
const router = express.Router();
const multer = require("multer");
const checkAuth = require("../middleware/check-auth");

const ProductsController = require("../controllers/products");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, false);
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.get("/", ProductsController.products_get_all);

router.post(
  "/",
  checkAuth,
  upload.single("productImage"),
  ProductsController.products_create_product
);

router.get("/:productID", ProductsController.products_get_product);

router.patch(
  "/:productID",
  checkAuth,
  ProductsController.products_update_product
);

router.delete(
  "/:productID",
  checkAuth,
  ProductsController.products_delete_product
);

module.exports = router;
