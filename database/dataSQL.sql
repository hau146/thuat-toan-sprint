INSERT INTO `shopbangiay`.`type_product` (`name`) VALUES ('Nike');
INSERT INTO `shopbangiay`.`type_product` (`name`) VALUES ('Vans');
INSERT INTO `shopbangiay`.`type_product` (`name`) VALUES ('Jordan');
INSERT INTO `shopbangiay`.`type_product` (`name`) VALUES ('Converse');
INSERT INTO `shopbangiay`.`type_product` (`name`) VALUES ('Adidas');

INSERT INTO `shopbangiay`.`role` (`name`) VALUES ('ADMIN');
INSERT INTO `shopbangiay`.`role` (`name`) VALUES ('MEMBER');

INSERT INTO `shopbangiay`.`size` (`size_number`) VALUES ('37');
INSERT INTO `shopbangiay`.`size` (`size_number`) VALUES ('38');
INSERT INTO `shopbangiay`.`size` (`size_number`) VALUES ('39');
INSERT INTO `shopbangiay`.`size` (`size_number`) VALUES ('40');
INSERT INTO `shopbangiay`.`size` (`size_number`) VALUES ('41');
INSERT INTO `shopbangiay`.`size` (`size_number`) VALUES ('42');

INSERT INTO `shopbangiay`.`rank_account` (`name`) VALUES ('Member');
INSERT INTO `shopbangiay`.`rank_account` (`name`) VALUES ('Gold');
INSERT INTO `shopbangiay`.`rank_account` (`name`) VALUES ('Platinum');

INSERT INTO `shopbangiay`.`voucher_rank` (`discount_money`, `name`, `id_rank`) VALUES ('10', 'Giảm 10%', '2');
INSERT INTO `shopbangiay`.`voucher_rank` (`discount_money`, `name`, `id_rank`) VALUES ('15', 'Giảm 15%', '2');
INSERT INTO `shopbangiay`.`voucher_rank` (`discount_money`, `name`, `id_rank`) VALUES ('20', 'Giảm 20%', '3');
INSERT INTO `shopbangiay`.`voucher_rank` (`discount_money`, `name`, `id_rank`) VALUES ('30', 'Giảm 30%', '3');

INSERT INTO `shopbangiay`.`detail_order_status` (`name_order_status`) VALUES ('Chưa nhận hàng');
INSERT INTO `shopbangiay`.`detail_order_status` (`name_order_status`) VALUES ('Đã nhận hàng');
INSERT INTO `shopbangiay`.`detail_order_status` (`name_order_status`) VALUES ('Có sự cố bên shipper');

INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `id_type_product`) VALUES ('Nike Fleshes Out The Air Max', '30', '1700000', '356', '34000', '1');
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `id_type_product`) VALUES ('Ui Design Nike Air Max Shoe', '255', '2350000', '720', '32000', '1');
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `id_type_product`) VALUES ('Air Force 1 \"07 LV8\"Kings Sneakers', '302', '1200000', '399', '40000', '1');
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `id_type_product`) VALUES ('Air Force 1 \"07 LV8\"Kings Sneakers', '160', '2256000', '1500', '35000', '1');
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `id_type_product`) VALUES ('Nike By You Custom Shoes', '200', '1320000', '1200', '23000', '1');
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `id_type_product`) VALUES ('Nike Online Sneaker Store Concept', '90', '2700000', '3900', '0', '1');
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `status_product`, `id_type_product`, `is_deleted`) VALUES ('Vans Vault', '400', '1000000', '425', '37000', 0, 2, 0);
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `status_product`, `id_type_product`) VALUES ('Vans Knu Skool', '1200', '1100000', '1000', '30000', 0, 2);
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `status_product`, `id_type_product`) VALUES ('Vans Old Skool - True White', '3000', '1000000', '2300', '23000', 0, 2);
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `status_product`, `id_type_product`) VALUES ('Vans Authentic Black Sole Women\'s Sneaker', '1080', '1080000', '900', '32000', 0, 2);
INSERT INTO `shopbangiay`.`product` (`name`, `number_product`, `price`, `sell_number`, `shipping_cost`, `status_product`, `id_type_product`) VALUES ('Custom Beige Air Force 1', '900', '2300000', '455', '0', b'0', b'1');










INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fnike1.png?alt=media&token=669f04ff-08d8-4c2b-9ab1-7cd0ac960eb1', '2');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fnike2.png?alt=media&token=3a730e26-da03-4888-b379-33492aaf75d3', '3');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fnike4.jpg?alt=media&token=80369049-6c4e-4088-95d0-d09e1854c2ca', '4');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fnike5.jpg?alt=media&token=eff2687f-a936-4934-bddf-a112d58d55a6', '5');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fnike6.jpg?alt=media&token=167338e5-027c-4ff4-a35b-24a8789a3ddb', '6');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/vans%2Fvans-id7-1.jpg?alt=media&token=0c2ba801-8f7f-429c-b8cf-8372ebf975f3', '7');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/vans%2Fvans-id7-2.jpg?alt=media&token=336d4e98-5add-447c-a735-4e7abd434486', '7');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/vans%2Fvans-id7-3.jpg?alt=media&token=46599edb-c559-4e1a-a157-1630a286a5c3', '7');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/vans%2Fvans-id9-1.jpg?alt=media&token=e8532355-1336-4eea-81d6-f72a3dce9e42', '9');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/vans%2Fvans-id9-2.jpg?alt=media&token=11596ccd-e8db-4c31-be63-6204da64d9ec', '9');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/vans%2Fvans-id9-3.jpg?alt=media&token=ab6a17b4-2230-4bb2-bbb2-728b744300dd', '9');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/vans%2Fvans-id10-1.jpg?alt=media&token=89ec2c79-df4d-445b-98af-14150d61e1a8', '10');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/vans%2Fvans-id10-2.jpg?alt=media&token=8ef022a3-23be-4ac3-a647-95e1e332e019', '10');
INSERT INTO `shopbangiay`.`image_product` (`image`, `id_product`) VALUES ('https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/vans%2Fvans-id10-3.jpg?alt=media&token=c1403165-33fd-4f13-951d-3c0c7ba5662d', '10');











INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('1', '1');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('1', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('1', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('1', '4');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('1', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('1', '6');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('2', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('2', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('2', '4');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('2', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('2', '6');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('3', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('3', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('3', '4');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('3', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('3', '6');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('4', '1');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('4', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('4', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('4', '4');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('4', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('4', '6');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('5', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('5', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('5', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('5', '6');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('6', '1');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('6', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('6', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('6', '4');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('6', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('6', '6');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('7', '1');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('7', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('7', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('7', '4');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('7', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('7', '6');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('8', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('8', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('8', '4');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('8', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('8', '6');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('9', '1');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('9', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('9', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('9', '4');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('9', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('9', '6');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('10', '1');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('10', '2');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('10', '3');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('10', '4');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('10', '5');
INSERT INTO `shopbangiay`.`size_detail` (`id_product`, `id_size`) VALUES ('10', '6');







INSERT INTO `shopbangiay`.`account` (`address`, `avatar`, `date`, `email`, `gender`, `name`, `number_phone`, `password`, `username`, `id_rank`, `id_role`) VALUES ('sơn trà, đà nẵng', 'https://i.pinimg.com/564x/cf/cc/dd/cfccdd11f041b98e87e4ed051d7d88c1.jpg', '2000-12-12', 'mai@gmail.com', 0, 'Nguyễn Thị Mai', '0947564783', '123', 'maint', 1, 2);
INSERT INTO `shopbangiay`.`account` (`address`, `avatar`, `date`, `email`, `gender`, `name`, `number_phone`, `password`, `username`, `id_rank`, `id_role`) VALUES ('cẩm lệ, đà nẵng', 'https://i.pinimg.com/564x/fb/41/3d/fb413d7a84a6244465feada20d43146d.jpg', '1999-01-01', 'hau@gmail.com', 1, 'Nguyễn Hữu Hậu', '0934878089', '123', 'haunh', 3, 1);

INSERT INTO `shopbangiay`.`cart` (`number_product`, `size_product`, `id_account`, `id_product`) VALUES ('2', '41', '1', '2');
INSERT INTO `shopbangiay`.`cart` (`number_product`, `size_product`, `id_account`, `id_product`) VALUES ('1', '42', '2', '6');
INSERT INTO `shopbangiay`.`cart` (`number_product`, `size_product`, `id_account`, `id_product`) VALUES ('2', '41', '1', '8');





